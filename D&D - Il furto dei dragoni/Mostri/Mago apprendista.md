---
razza: Umanoide medio (Qualsiasi razza)
classe: Mago
sfida: 1/4
pf: "9"
ca: "10"
for: "10"
des: "10"
cos: "10"
int: "14"
sag: "10"
car: "11"
allineamento: n/a
vel: 9m(6 c)
init: "0"
pagina: 204 (FdD)
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
>> **Pugnale**
>> mischia o distanza [6/18] +2 (1d4 p)
>
>> **Incantesimi**
>> Incantatore lvl 1 (INT)
>> CD 12, +4 colpire
>> *a volontà:* dardo di fuoco, prestidigitazione, riparare
>> *2 slot:* camuffare se stesso, mani brucianti, scudo
>
>

