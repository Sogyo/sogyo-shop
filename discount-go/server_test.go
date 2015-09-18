package main

import (
	"net/http/httptest"
	"net/http"
	"testing"
)

func TestMakeSimpleRequest(t *testing.T) {
	handler := MakeHandler(DiscountHandler)

	req, _ := http.NewRequest("GET", "/discount/mystring", nil)

	first := httptest.NewRecorder()
	handler.ServeHTTP(first, req)

	if first.Code != http.StatusOK {
		t.Fatalf("Expected first status code to be %v, not %v", 200, first.Code)
	}

	header := first.Header().Get("X-Server-Language")

	if header != "go" {
		t.Fatalf("Expected the X-Server-Language header to be set to go (was %v)", header)
	}
}

func TestDiscountEqualityCaseInsensitive(t *testing.T) {
	handler := MakeHandler(DiscountHandler)

	reqFirst, _ := http.NewRequest("GET", "/discount/mystring", nil)
	reqSecond, _ := http.NewRequest("GET", "/discount/MyString", nil)

	first := httptest.NewRecorder()
	handler.ServeHTTP(first, reqFirst)

	second := httptest.NewRecorder()
	handler.ServeHTTP(second, reqSecond)

	if first.Code != http.StatusOK {
		t.Fatalf("Expected first status code to be %v, not %v", 200, first.Code)
	}

	if second.Code != http.StatusOK {
		t.Fatalf("Expected second status code to be %v, not %v", 200, first.Code)
	}

	if first.Body.String() != second.Body.String() {
		t.Fatalf("Expected first %v to be equal to second %v", first.Body.String(), second.Body.String())
	}
}
