import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container} id="product">
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      Are you in the mood for something tasty and satisfying? Come on down to our pizza shop, where you can choose from a wide variety of toppings to create your own perfect pizza
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) =>(
               <PizzaCard key={pizza._id} pizza={pizza}/>

          ))}
       
         
      </div>
    </div>
  );
};

export default PizzaList;
