CREATE TABLE inventory
(
  id SERIAL NOT NULL,
  stock_total bigint NOT NULL,
  stock_reserved bigint NOT NULL DEFAULT 0,
  sku varchar(20) NOT NULL UNIQUE,
  CONSTRAINT inventory_id PRIMARY KEY (id)
);