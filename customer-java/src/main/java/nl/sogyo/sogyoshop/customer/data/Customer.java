package nl.sogyo.sogyoshop.customer.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Customer {
  private UUID uuid;
  private String firstName;
  private String lastName;
  private String email;

  public Customer() {
    // Needed by Jackson deserialization
  }

  public Customer(String firstName, String lastName, String email) {
    this(UUID.randomUUID(), firstName, lastName, email);
  }

  public Customer(UUID uuid, String firstName, String lastName, String email) {
    this.uuid = uuid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  @JsonProperty
  public UUID getUuid() {
    return uuid;
  }

  @JsonProperty
  public String getFirstName() {
    return firstName;
  }

  @JsonProperty
  public String getLastName() {
    return lastName;
  }

  @JsonProperty
  public String getEmail() {
    return email;
  }
}