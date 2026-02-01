let product="",price="";

function order(p,pr){
  product=p; price=pr;
  modal.style.display="block";
}

function closeOrder(){
  modal.style.display="none";
}

function send(){
  let msg=`طلب جديد
المنتج: ${product}
السعر: ${price}
الاسم: ${n.value}
الهاتف: ${p.value}
العنوان: ${a.value}
المقاس: ${s.value}
اللون: ${c.value}
الكمية: ${q.value}`;
  window.open(`https://wa.me/201124043956?text=${encodeURIComponent(msg)}`);
}
