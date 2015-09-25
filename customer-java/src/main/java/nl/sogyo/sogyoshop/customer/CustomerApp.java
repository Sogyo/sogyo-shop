package nl.sogyo.sogyoshop.customer;

import com.hubspot.dropwizard.guice.GuiceBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import nl.sogyo.sogyoshop.customer.checks.CustomerCheck;

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
        .enableAutoConfig(getClass().getPackage().getName())
        .setConfigClass(CustomerConfig.class)
        .build();

    bootstrap.addBundle(guiceBundle);
  }

  @Override
  public void run(CustomerConfig config, Environment env) {
    final CustomerCheck healthCheck = new CustomerCheck(config.getVersion());
    env.healthChecks().register("template", healthCheck);
    env.jersey().register(healthCheck);
  }
}