def prime_finder(n):

  # primeList = []

  # for num in range(2,n + 1):
  #   if num > 1:
  #     for i in range (2, num):
  #       if(num % i) == 0: break
  #     else: 
  #         primeList.append(num)

  # return primeList
  # Define a list to store the prime numbers
  primes = []

  # Iterate over the numbers from 1 to n
  for num in range(1, n+1):
    # Check if the number is prime
    is_prime = True
    for i in range(2, num):
      if num % i == 0:
        is_prime = False
        break
    # If the number is prime, add it to the list
    if is_prime:
      primes.append(num)

  # Return the list of prime numbers
  return primes


print(prime_finder(11))

