# Reto1git

1) Voy a la página de GIT
2) Pulso el botón verde de código en la página del repositorio
3) Uso la opción clone y copio el enlace que aparece en GIT, donde pone HTTPS
4) Ejecuto git clone en el terminal
5) Después git init, que abre mi carpeta que tengo en local
6) Lo siguiente es git add . 
7) Escribimos git commit -m "Insertamos comentario de las modificaciones"
8) Por último, git push origin main (mejor no utilizar máster porque se ha considerado ofensivo y se ha cambiado a la palabra main)


Como estábamos trabajando en la rama main todo el rato y hemos querido crear dos ramas (rama1 y rama2). Primero hemos escrito en el terminal branch rama 1 y rama2. Ha creado dos ramas en rama main Para moverte entre ellas, escribes git checkout + la rama a la que quieras acceder, en este caso rama1. Hemos borrado la función suma y hemos guardado los cambios con git add .-, git commit -m"" y git push. Esto lo ha guardado en el repositorio remoto. Cambiamos a la rama principal con git checkout main y fusionamos con git merge rama1. Hemos comprobado el estado de esta acción con git status. Cuando hemos comprobado que todo está bien, escribimos git push. Esto permite que se actualice en github.
Para cambiarnos a la rama 2, escribimos git checkout y la rama a la que queremos acceder, en este caso, rama2. Hemos copiado la función suma y la hemos modificado, añadiendo un tercer operador en la rama2. Hemos subido los cambios al repositorio con git add .-, git commit -m"" y git push. Volvemos a la rama principal con git checkout main y fusionamos con el git merge rama2.  Hemos comprobado el estado de esta acción con git status. Cuando hemos comprobado que todo está bien, escribimos git push. Esto permite que se actualice en github. Aparecen varios conflictos. Los modificamos a través de git y en la consola de visual studio code. En visual code, resolvemos con el editor de combinación. Pulsamos este botón y modificamos o no lo que aparece en visual. Una vez hecho, completamos la fusión mediante combinación. 
Aparece un mensaje: ¿Desea completar la combinación de main.js? Y seleccionas, completar con conflictos. Una vez que lo haces, aparece otra ventana ¿Dsea cerrar el editor de combinación para main.js? y seleccionamos cerrar con conflictos.