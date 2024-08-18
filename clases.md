
* Una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje.

* Pros y contras de utilizar clases en javascript
Ahora se puede utilizar la palabra clave 'class' para crear clases en JS pero la gente se acostumbró a utilizar otras técnicas para hacerlo. 
Pros: es bueno mejorar la sintaxis. Es opcional y hay otras formas de crear objetos. Esta bien para propósitos limitados
Contras: El concepto de clase No Existe en JS. El concepto de clases hace que las cosas sean frágiles, los prototipos son mejores y mas flexibles. 

* Diferencia entre JS y otros lenguajes (breve)



* Diferencia entre constructor y clase

Sintaxis básica de una 

class MyClass {
  prop = value; // propiedad

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // método

  get something(...) {} // método getter
  set something(...) {} // método setter

  [Symbol.iterator]() {} // método con nombre calculado (aquí, symbol)
  // ...
}

MyClass es técnicamente una función (la que proveemos como constructor), mientras que los métodos, getters y setters son escritos en MyClass.prototype.



alert(User === User.prototype.constructor); // true

* que son getters y setters (propiedades de acceso)
Son propiedades de objetos que se utilizan en escencia a obtener (get) y asignar (set) un valor

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {  // getter, el código ejecutado para obtener obj.propName
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {  // setter, el código ejecutado para asignar obj.propName = value
    [this.name, this.surname] = value.split(" ");
  }
};

- En el setter se pueden poner condicionales para hacerlo mas "inteligente".


* que son los nombres calculados y los campos de clase

- Nombres calculados: Se refiere a la posibilidad de definir propiedades o métodos de una clase u objeto usando una expresión dinámica.

const propiedad = "nombreCompleto";

const persona = {
  [propiedad]: "Juan Pérez"
};

console.log(persona.nombreCompleto); // "Juan Pérez"

En este ejemplo, 'propiedad' es una variable que contiene el nombre de la propiedad. Al usar corchetes ([]), se define una propiedad cuyo nombre es el valor de 'propiedad'... De la misma manera se puede nombrar un método.

- Campos de clase: Son variables definidas dentro de una clase. Pueden ser campos de instancia (propiedades únicas para cada objeto) o campos estáticos (compartidos entre todos los objetos de la clase).



* Describir la vinculación de funciones 

Es el concepto que se refiere a la capacidad de fijar o asociar un contexto específico (this) a una función.

* Como implementar campos y métodos en clases privadas

- Las propiedades de clase son publicas, sin embargo existe una propuesta experimental para permitir la definición de campos de clase privados con # (hash)

class ClaseConCampoPrivado {
  #campoPrivado
}

class ClaseConMetodoPrivado {
  #metodoPrivado() {
    // ...
  }
}

class ClaseConCampoEstaticoPrivado {
  static #CAMPO_ESTATICO_PRIVADO
}

* Herencia con clases

- Permite heredar propiedades y métodos de una clase padre (superclase) a una clase hija (subclase)

- La clase hija hereda del padre todos los metodos y propiedades, pero también puede tener sus propios métodos y propiedades. También puede sobreescribir los métodos y propiedades del padre.


// Clase base (Padre)
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

// Clase derivada (Hija)
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase base
    this.raza = raza;
  }

  hacerSonido() {
    console.log(`${this.nombre} ladra.`);
  }
}

let miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // Firulais ladra.



* Por que generalmente se prefiere la composición a la herencia

 La composición se prefiere a la herencia porque ofrece mayor flexibilidad, permite un diseño más modular y fácil de mantener, reduce el acoplamiento, y evita la complejidad de las jerarquías de herencia.

* Métodos estáticos 

- Son llamadas sin instanciar su clase... (No se necesita hacer un objeto de la clase para poder usar el método)