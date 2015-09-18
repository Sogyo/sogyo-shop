package main
import "testing"

func TestCalculateConsistentHash(t *testing.T) {
	first := CalculateDiscountPercentage("foo")
	second := CalculateDiscountPercentage("foo")
	if first != second {
		t.Fatalf("Expected %v to be equal to %v", first, second)
	}
}

func TestCalculateConsistentHashDifferent(t *testing.T) {
	first := CalculateDiscountPercentage("foo")
	second := CalculateDiscountPercentage("Foo")
	if first == second {
		t.Fatalf("Expected %v to be equal to %v", first, second)
	}
}
