package nl.sogyo.sogyoshop.customer;

import com.codahale.metrics.health.HealthCheck;

public class CustomerCheck extends HealthCheck {
    private final String version;

    public CustomerCheck(String version) {
        this.version = version;
    }

    @Override
    protected Result check() throws Exception {
        return Result.healthy("OK with version: " + this.version);
    }
}
