---
razza: Bestia (minuscola)
classe: Uccello stigeo
sfida: 1/8
pf: "2"
ca: "14"
for: "4"
des: "16"
cos: "11"
int: "2"
sag: "8"
car: "6"
allineamento: n/a
vel: 3m(2 c), volare 12m(8 c)
init: "3"
pagina: 291 (MM)
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
> 
>> **Risucchio di sangue.**
>> mischia +5 (1d4+3 p)
>> si avvinghia al bersaglio e nei turni successivi tira direttamente i danni, risucchiando il sangue. Si stacca una volta risucchiati 10pf totali
>> Il bersaglio può spendere 1 azione per staccare l'uccello

> [!example]- Talenti
> Contents

> [!tldr]- Storia
> Lorem ipsum dolor sit amet


