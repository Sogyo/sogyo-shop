package nl.sogyo.sogyoshop.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import org.hibernate.validator.constraints.NotEmpty;

public class CustomerConfig extends Configuration {
  @NotEmpty
  private String version;

  @NotEmpty
  private String repository;

  @JsonProperty
  public String getVersion() {
    return version;
  }

  @JsonProperty
  public void setVersion(String version) {
    this.version = version;
  }

  @JsonProperty
  public String getCustomerRepository() {
    return repository;
  }

  @JsonProperty
  public void setCustomerRepository(String repository) {
    this.repository = repository;
  }
}
