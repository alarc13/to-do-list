class Tarea{
    constructor(tarea,terminada,contenedor){ //recibe el texto de la tarea(striing), si esta terminada(boolean) y el contenedor(elemento del dom)
        this.tarea = tarea; //es lo que sea al crearse
        this.terminada = terminada;// tarea y terminada es lo que conecta el sistema en el backend con el frontend
        this.elememto = null;
        this.editando = false; //variable de estado solo es para el front
        this.crearTarea(contenedor);
    }

        //cada una de las tareas tiene que saber si esta siendo editada o no (variable de estado)
  
    crearTarea(contenedor){ 
        //crear elementos
        this.elememto = document.createElement("div");
        this.elememto.classList.add("tarea"); //añade la clase tarea

        //texto de la tarea
        let textoTarea = document.createElement("h3"); 
        textoTarea.classList.add("visible");
        textoTarea.innerHTML = this.tarea; //el texto de la tarea

        //editor tarea
        let editorTarea = document.createElement("input");
        editorTarea.value = this.tarea;

        //boton editar
        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton");
        botonEditar.innerHTML = "editar";
        botonEditar.addEventListener("click", () =>{
            this.editarTarea();
        });

        //boton borrar
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("boton");
        botonBorrar.innerHTML = "borrar";
        botonBorrar.addEventListener("click", () => { //haciendo funcionar el boton 
            this.borrarTarea(); // llamamos al metodo que hemos creado abajo de borrar tarea para que funcione el boton borrar
        });

        //boton estado
        let botonEstado = document.createElement("button");
        botonEstado.classList.add("estado",this.terminada ? "terminada" : null); //al boton estado le añadimos la calse estado y terminada bajo la condicion de que this.terminada sea true, si no sera null
        botonEstado.appendChild(document.createElement("span"));// hemos creado los botones

        botonEstado.addEventListener("click",() =>{ //creramos el cambio de estado
            this.cambiarEstado();
            botonEstado.classList.toggle("terminada"); //lo hacemos visual en la interface
            console.log(this);
        });
        
        //añadir elementos
        this.elememto.appendChild(textoTarea); //añadimos el texto
        this.elememto.appendChild(editorTarea);
        this.elememto.appendChild(botonEditar);
        this.elememto.appendChild(botonBorrar);
        this.elememto.appendChild(botonEstado);

        contenedor.appendChild(this.elememto); //añadimos el contenedor
    }
    cambiarEstado(){ //cambia el estado de la tarea
        this.terminada = !this.terminada;
    }
    borrarTarea(){ //borra la tarea
        this.elememto.remove();

    }
    editarTarea(){
        if(this.editando){  //si presiono el boton lo q hago es guardar
            if(this.elememto.children[1].value.trim() != "" && this.elememto.children[1].value.trim() != this.tarea){
                this.tarea = this.elememto.children[1].value.trim();
            }
            this.elememto.children[0].innerHTML = this.tarea;
            this.elememto.children[0].classList.add("visible");
            this.elememto.children[1].classList.remove("visible");
            this.elememto.children[2].innerHTML = "editar"; 


        }else{ // si no lo que quiero hacer es editar
            this.elememto.children[0].classList.remove("visible"); //estamos apagando el h3
            this.elememto.children[1].value = this.tarea; 
            this.elememto.children[1].classList.add("visible"); //añadiendo visible al input 
            this.elememto.children[2].innerHTML = "guardar"; //cambiando editar por guardar
        }
        this.editando = !this.editando;
    }


} 