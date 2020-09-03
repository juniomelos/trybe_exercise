SELECT A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM sakila.film AS A, sakila.film AS B
WHERE A.replacement_cost = B.replacement_cost;
