/* Find the item that has minimum weight */
select
    *
from
    items
order by
    weight asc
limit
    1;

/* Find the different warehouses in “Pune”.*/
select
    *
from
    warehouses w
    join cities c on w.city_id = c.city_id
where
    c.city_name = "PUNE";

/*Find the details of items ordered by a customer “Mr. Patil”.*/
select
    *
from
    order_details od
    join order o on o.order_id = od.order_id
    join items i on i.item_id = od.item_id
    join customer c on c.customer_id = o.customer_id
where 
    c.customer_name = "Mr. Patil"


/*Find a Warehouse which has maximum stores.*/
select
    w.*
from
    warehouses as w
    join stores as s on w.warehouse_id = s.warehouse_id
group by
    w.warehouse_id
order by
    count(w.warehouse_id) desc
limit
    1;

/* Find an item which is ordered for a minimum number of times.*/
select
    i.*
from
    order_details as od
    join items as i on i.item_id = od.item_id
group by
    oi.item_id
order by
    count(od.item_id) asc
limit
    1;

/*Find the detailed orders given by each customer */
select
    c.*,
    i.*
from
    customer as c
    join orders as o on c.customer_id = o.customer_id
    join order_details as od on od.order_id = o.order_id
    join items as i on i.item_id = od.item_id
order by
    c.customer_id;