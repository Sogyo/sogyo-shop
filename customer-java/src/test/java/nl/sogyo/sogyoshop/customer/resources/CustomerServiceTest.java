package nl.sogyo.sogyoshop.customer.resources;

import com.squarespace.jersey2.guice.BootstrapUtils;
import io.dropwizard.testing.junit.ResourceTestRule;
import nl.sogyo.sogyoshop.customer.data.Customer;
import nl.sogyo.sogyoshop.customer.persistence.CustomerRepository;
import org.junit.*;

import javax.inject.Inject;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class CustomerServiceTest {

  private static final CustomerRepository repo = mock(CustomerRepository.class);
  private UUID uuid;
  private Customer customer;

  @ClassRule
  public static final ResourceTestRule resources = ResourceTestRule.builder()
      .addResource(new CustomerService(repo))
      .build();

  @Before
  public void setup() {
    BootstrapUtils.reset();
    reset(repo);

    uuid = UUID.fromString("73e3b822-1210-4894-b959-7ca1901c2865");
    customer = new Customer(uuid, "a", "b", "a@b.c");

    when(repo.getByUUID(any())).thenReturn(customer);
  }

  @Test
  public void testGetCustomer() {
    assertThat(resources.client().target("/" + uuid).request().get(Customer.class)).isEqualTo(customer);
    verify(repo).getByUUID(uuid);
  }
}
