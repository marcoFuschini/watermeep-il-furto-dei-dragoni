---
razza: Umanoide medio (Qualsiasi razza)
classe: 
sfida: 1/2
pf: "32"
ca: "11"
for: "15"
des: "11"
cos: "14"
int: "10"
sag: "10"
car: "11"
allineamento: non buono
vel: 9m(6 c)
init: "0"
pagina: 348 (MM)
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
>> **Multitattacco.**
>> due attacchi in mischia
>
>> **Mazza**
>> mischia +4 (1d6+2 c)
>
>> **Balestra pesante**
>> distanza[30/120] +2 (1d10 p)
>
>> **Senz'armi**
>> mischia +2 (3 c)



> [!example]- Talenti
>> **Tattiche del branco**
>> vantaggio al TpC se un suo alleato non incapacitato è entro 1,5m dal bersaglio

> [!tldr]- Storia
> Lorem ipsum dolor sit amet


