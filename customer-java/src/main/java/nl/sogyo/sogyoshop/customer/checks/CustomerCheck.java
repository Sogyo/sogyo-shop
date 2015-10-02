package nl.sogyo.sogyoshop.customer.checks;

import com.codahale.metrics.health.HealthCheck;

import javax.inject.Inject;
import javax.inject.Named;

public class CustomerCheck extends HealthCheck {
  private final String version;

  @Inject
  public CustomerCheck(@Named("version") String version) {
    this.version = version;
  }

  @Override
  protected Result check() throws Exception {
    return Result.healthy("OK with version: " + this.version);
  }
}
