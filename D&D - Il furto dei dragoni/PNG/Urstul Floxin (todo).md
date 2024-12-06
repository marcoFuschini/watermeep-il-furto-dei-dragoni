---
razza: 
classe: 
sfida: "1"
pf: "8"
ca: "10"
for: "10"
des: "10"
cos: "10"
int: "10"
sag: "10"
car: "10"
allineamento: N
vel: 9m(6 c)
init: "0"
pagina:
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
> Contents

> [!example]- Talenti
> Contents

> [!tldr]- Storia
> Lorem ipsum dolor sit amet


