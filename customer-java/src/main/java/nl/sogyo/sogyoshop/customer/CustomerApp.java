package nl.sogyo.sogyoshop.customer;

import com.hubspot.dropwizard.guice.GuiceBundle;
import io.dropwizard.setup.Bootstrap;
import nl.sogyo.sogyoshop.customer.resources.CustomerService;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;

public class CustomerApp extends Application<CustomerConfig> {

  private GuiceBundle<CustomerConfig> guiceBundle;

  public static void main(String[] args) throws Exception {
    new CustomerApp().run(args);
  }

  @Override
  public String getName() {
    return "customer-service";
  }

  @Override
  public void initialize(Bootstrap<CustomerConfig> bootstrap) {

    guiceBundle = GuiceBundle.<CustomerConfig>newBuilder()
        .addModule(new CustomerModule())
        .setConfigClass(CustomerConfig.class)
        .build();

    bootstrap.addBundle(guiceBundle);
  }

  @Override
  public void run(CustomerConfig config, Environment env) {
    final CustomerService customerService = new CustomerService();
    env.jersey().register(customerService);

    final CustomerCheck healthCheck = new CustomerCheck(config.getVersion());
    env.healthChecks().register("template", healthCheck);
    env.jersey().register(healthCheck);
  }
}