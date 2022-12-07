package com.Tests;

import static org.junit.jupiter.api.Assertions.*;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class Test01 {

	@Test
	public void getIntoPagAndRegister() throws InterruptedException {
		Response response = RestAssured.get("https://reqres.in/api/users");

		System.out.println(response.getStatusCode());
		System.out.println(response.getTime());
		System.out.println(response.getBody().asString());

		ValidatableResponse validate = response.then();
		validate.statusCode(200);
		validate.time(Matchers.lessThanOrEqualTo(1500L));
		validate.contentType(ContentType.JSON);
	}

	@Test
	public void api_test_02(){
		Response response = RestAssured.get("https://api.openweathermap.org/data/2.5/weather?q=Curitiba&appid=f548280284dd2a302a401bb70d0f272a&units=metric");

		ValidatableResponse validate = response.then();
		validate.statusCode(200);
		validate.time(Matchers.lessThanOrEqualTo(1500L));
		validate.contentType(ContentType.JSON);

	}

}
