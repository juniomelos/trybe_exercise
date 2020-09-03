CREATE VIEW film_info AS
    SELECT
        fa.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
    FROM sakila.film_actor fa
    INNER JOIN sakila.film f ON f.film_id = fa.film_id
    INNER JOIN sakila.actor a ON a.actor_id = fa.actor_id
    ORDER BY actor;
