package br.com.alquimiadaspalavras;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class AlquimiadaspalavrasApplication {
	public static void main(String[] args) {
		SpringApplication.run(AlquimiadaspalavrasApplication.class, args);
	}
}
