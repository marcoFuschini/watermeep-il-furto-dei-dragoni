---
razza: Umano (medio)
classe: 
sfida: 1/8
pf: "11"
ca: "12"
for: "11"
des: "12"
cos: "12"
int: "10"
sag: "10"
car: "10"
allineamento: C
vel: 9m(6 c)
init: "1"
pagina: 343 (MM)
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
>> **Scimittarra.** 
>> mischia +3 (1d6+1 t)
>
>> **Balestra leggera.** 
>> distanza[24/96m] +3 (1d8+1 p) 

> [!example]- Talenti
> Contents

> [!tldr]- Storia
> Capo di una squadriglia che lavora per la [[Gilda di Xhanatar]]


