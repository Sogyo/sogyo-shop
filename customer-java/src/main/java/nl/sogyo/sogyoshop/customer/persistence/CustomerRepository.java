package nl.sogyo.sogyoshop.customer.persistence;

import nl.sogyo.sogyoshop.customer.data.Customer;

import java.util.*;

public interface CustomerRepository {
  Customer getByUUID(UUID uuid);
  List<Customer> all();
  boolean persist(Customer customer);
}
