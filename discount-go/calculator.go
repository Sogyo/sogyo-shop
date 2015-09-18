package main
import "hash/fnv"

func CalculateDiscountPercentage(in string) (uint64) {
	h := fnv.New64()
	h.Write([]byte(in))
	return h.Sum64() % 100
}
