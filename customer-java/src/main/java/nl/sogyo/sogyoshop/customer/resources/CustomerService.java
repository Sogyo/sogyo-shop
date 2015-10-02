package nl.sogyo.sogyoshop.customer.resources;

import nl.sogyo.sogyoshop.customer.data.Customer;
import com.codahale.metrics.annotation.Timed;
import nl.sogyo.sogyoshop.customer.persistence.CustomerRepository;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;
import java.util.UUID;

@Path("/")
public class CustomerService {

  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(CustomerService.class);

  private CustomerRepository repository;

  @Inject
  public CustomerService(@Named("CustomerRepository") CustomerRepository repository) {
    this.repository = repository;
  }

  @GET
  @Timed
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Customer> listCustomers() {
    log.info("listCustomers()");
    return repository.all();
  }

  @GET
  @Timed
  @Path("/{uuid}")
  @Produces(MediaType.APPLICATION_JSON)
  public Customer getCustomer(@PathParam("uuid") UUID uuid) {
    log.info("getCustomer({})", uuid);
    return repository.getByUUID(uuid);
  }

  @DELETE
  @Timed
  @Path("/{uuid}")
  @Produces(MediaType.APPLICATION_JSON)
  public Customer DeleteCustomer(@PathParam("uuid") UUID uuid) {
    log.info("DeleteCustomer({})", uuid);
    return new Customer();
  }

  @PUT
  @Timed
  @Path("/{uuid}")
  @Produces(MediaType.TEXT_PLAIN)
  public Response updateCustomer(@PathParam("uuid") UUID uuid) {
    log.info("UpdateCustomer({})", uuid);
    return Response
        .status(Response.Status.OK)
        .build();
  }

  @POST
  @Timed
  @Path("/")
  @Produces(MediaType.TEXT_PLAIN)
  @Consumes({MediaType.APPLICATION_JSON})
  public Response newCustomer(Customer customer) {
    log.info("newCustomer({})", customer);
    URI location;

    try {
      location = new URI("/" + customer.getUuid());
    } catch (Exception e) {
      e.printStackTrace();
      return Response
          .status(Response.Status.INTERNAL_SERVER_ERROR)
          .build();
    }

    return Response
        .status(Response.Status.OK)
        .location(location)
        .build();
  }
}

