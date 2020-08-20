create table danger_zone_user (
  dz_user_id serial primary key,
  email varchar(250) not null unique,
  hash varchar(250) not null
);