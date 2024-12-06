---
razza: Umanoide medio (Nano)
classe: ?Duergar?
sfida: "1"
pf: "26"
ca: "16"
for: "14"
des: "11"
cos: "14"
int: "11"
sag: "10"
car: "9"
allineamento: LM
vel: 7,5m(5 c)
init: "0"
pagina: 122 (MM)
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
>> **Ingrandire (1 x rb/rl)**
>> Per 1 in diventa di taglia Grande (il più possibile rispetto all'ambiente), raddoppiando i dadi danno sugli attacchi di FOR e vantaggio alle prove di FOR e TS FOR
>
>> **Piccone da guerra**
>> mischia +4 (1d8+2 p) o (2d8+2 p) se ingrandito
>
>> **Giavellotto**
>> mischia o distanza[9/36] +4 (1d6+2 p) o (2d6 +2 p) se ingrandito
>
>> **Invisibilità (1x rb/rl)**
>> Come incantesimo *Invisibilità*
>
>

> [!example]- Talenti
>> **Resilienza Duergar**
>> Vantaggio vs TS Veleno, TS Incantesimi e TS Illusioni
>> Vantaggio vs affascinato o paralizzato
>


> [!tldr]- Storia
> Lorem ipsum dolor sit amet


