package nl.sogyo.sogyoshop.customer.data;

import static io.dropwizard.testing.FixtureHelpers.*;
import static org.assertj.core.api.Assertions.assertThat;
import io.dropwizard.jackson.Jackson;
import org.junit.Test;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.UUID;

public class CustomerTest {

  private static final ObjectMapper MAPPER = Jackson.newObjectMapper();

  @Test
  public void serializesToJSON() throws Exception {
    final Customer customer = new Customer(UUID.fromString("66424ba8-a1b2-4261-b89c-a00af7fb0e47"), "Foo", "Bar", "foo@bar.baz");

    final String expected = MAPPER.writeValueAsString(
        MAPPER.readValue(fixture("fixtures/FooCustomer.json"), Customer.class));

    assertThat(MAPPER.writeValueAsString(customer)).isEqualTo(expected);
  }
}