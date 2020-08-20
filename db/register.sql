INSERT INTO danger_zone_user
(email, hash)
VALUES
($1, $2)
RETURNING *;