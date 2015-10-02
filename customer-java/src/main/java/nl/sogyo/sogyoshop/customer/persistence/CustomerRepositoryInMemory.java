package nl.sogyo.sogyoshop.customer.persistence;

import nl.sogyo.sogyoshop.customer.data.Customer;

import java.util.*;
import java.util.stream.Collectors;

public class CustomerRepositoryInMemory implements CustomerRepository {
  private static Map<UUID, Customer> customers = new HashMap<>();

  private static void add(UUID id, String first, String last, String email) {
    customers.put(id, new Customer(id, first, last, email));
  }

  static {
    add(UUID.fromString("0f22b52a-a530-44b9-ac10-54dd35c6b49f"), "First", "Last", "first@last.ext");
    add(UUID.fromString("9a22b52a-a531-44b9-ff10-64dd35c6b49f"), "foo", "bar", "foo@bar.baz");
  }
  @Override
  public Customer getByUUID(final UUID uuid) {
    return customers.get(uuid);
  }

  @Override
  public List<Customer> all() {
    return customers.entrySet().stream().map(Map.Entry::getValue).collect(Collectors.toList());
  }

  @Override
  public boolean persist(final Customer customer) {
    customers.put(customer.getUuid(), customer);
    return true;
  }
}
