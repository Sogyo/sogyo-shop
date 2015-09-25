package nl.sogyo.sogyoshop.customer;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import nl.sogyo.sogyoshop.customer.persistence.CustomerRepository;

import javax.inject.Named;

public class CustomerModule extends AbstractModule {

  @Override
  protected void configure() {
  }

  @Provides
  @Named("CustomerRepository")
  public CustomerRepository provideCustomerRepository(CustomerConfig configuration) {
    String name = configuration.getCustomerRepository();
    try {
      Class<?> clazz = Class.forName("nl.sogyo.sogyoshop.customer.persistence." + name);
      return (CustomerRepository) clazz.newInstance();
    } catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
      e.printStackTrace();
    }
    return null;
  }
}

