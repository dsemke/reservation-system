package gov.dhs.conf.reservation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
  @GetMapping("/hello")
  public String helloWorld() {
    return "hello world!";
  }
}
