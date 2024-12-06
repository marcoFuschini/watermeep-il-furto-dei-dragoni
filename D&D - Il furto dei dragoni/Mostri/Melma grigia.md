---
razza: Melma media
classe: Melma
sfida: 1/2
pf: "22"
ca: "8"
for: "12"
des: "6"
cos: "16"
int: "1"
sag: "6"
car: "2"
allineamento: n/a
vel: 3m(2 c), scalare 3m
init: "-2"
pagina: 215 (MM)
---
# `= this.file.name` 
 `$= dv.current().pagina? '##### pag.'+dv.current().pagina : ''`
*`= this.razza`* **`= this.allineamento`** 
*`= this.classe`*
*(GS `=this.sfida`)*

--- start-multi-column: StatsRegion

```column-settings  
number of columns: 2  
largest column: left
Border: off
Shadow: off
```

> [!statlist]
> | | |
> |:---|:---:|
> | Punti ferita | `= this.pf`|
> | CA | `= this.ca` |
> | Iniziativa | `= this.init` |
> | Velocità | `= this.vel` |
> 

--- end-column ---

|     |              | MOD                                                                      |
| --- | ------------ | ------------------------------------------------------------------------ |
| FOR | `= this.for` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().for);` |
| DES | `= this.des` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().des);` |
| COS | `= this.cos` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().cos);` |
| INT | `= this.int` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().int);` |
| SAG | `= this.sag` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().sag);` |
| CAR | `= this.car` | `$= await dv.view("code/JS-DATAVIEW/computeModifier",dv.current().car);` |

--- end-multi-column

> [!error]- Azioni
>> **Pseudopode**
>> mischia +3 (1d6+1 c + 2d6 acido)
>> se colpisce un bersaglio con un armatura di metallo non magica, -1 CA permanente all'armatura. Se la CA dell'armatura scende a 10, l'armatura viene distrutta.

> [!example]- Talenti
>> **Amorfo**
>> Può muoversi in uno spazio stretto fino a 2,5cm
>
>> **Corrodere il metallo**
>> Qualsiasi arma non magica fatta in metallo che colpisca la melma subisce -1 ai tiri per i danni. Se la penalità arriva a -5, l'arma è distrutta.
>> Può corrodere uno spessore di 5cm di metallo in 1 round.
>
>> **Falso aspetto**
>> Finchè rimane immobile, non è distinguibile da una pozza oleosa o una roccia umida.
>

> [!tldr]- Storia
> Lorem ipsum dolor sit amet


