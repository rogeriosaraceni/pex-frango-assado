import BtnAnexo from '../_components/BtnAnexo.astro';
import SelectPontos from '../_components/SelectPontos.astro';
import { rows5s, rowsGente, rowsGestao, rowsArea } from './Tab1.astro';

<Fragment>
<style is:inline>{`
    .aval-line-sub td{
        font-weight: bold;
    }
    .tooltip-aval{
        max-width: 400px;
        text-align: left;
    }

    .list-add{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 0.5rem
    }
    .list-add li{
        width: 20px;
        line-height: 1;
        /* background-color: red; */
    }

    [data-bs-theme=light] {
        .aval-line-sub td{
            background-color: #eee;
        }
    }

    [data-bs-theme=dark] {
        .aval-line-sub td{
            background-color: #1a1a1a;
        }
    }
`}</style>

<div class="table-responsive" style="max-height: 500px">
<table class="table table-bordered table-fixed small text-center fixThead">
<thead>
<th style="width: 600px">Item</th>
<th style="width: 080px">Adicionais</th>
<th style="width: 070px">Peso</th>
<th style="width: 070px">Pontos</th>
<th style="width: 110px">Pontos Alcançado</th>
</thead>

<tbody>
<tr class="aval-line-sub">
<td colspan="2" class="text-start">5 S</td>
<td>9,0%</td>
<td>9</td>
<td></td>
</tr>
{rows5s.map(({ item, descricao, peso, pontos }) => (
<Fragment><tr>
<td class="text-start">
<div class="d-flex align-items-baseline justify-content-between gap-1">
<div>{item}</div>
</div>
</td>

<td>
<ul class="list-add">
<li>
<div {...{ "data-bs-toggle": "tooltip-aval", "data-bs-title": (descricao) }}>
<i class="bi bi-info-circle-fill text-secondary icon-tab fs-6"></i>
</div>
</li>

<li>
<BtnAnexo />
</li>

<li>

</li>
</ul>
</td>

<td>{peso}</td>
<td>{pontos}</td>

<td>
<SelectPontos />
</td>
</tr></Fragment>
))}


<tr class="aval-line-sub">
<td colspan="2" class="text-start">Gente</td>
<td>66%</td>
<td>66</td>
<td></td>
</tr>
{rowsGente.map(({ item, descricao, peso, pontos }) => (
<Fragment><tr>
<td class="text-start">
<div class="d-flex align-items-baseline justify-content-between gap-1">
<div>{item}</div>
</div>
</td>

<td>
<ul class="list-add">
<li>
<div {...{ "data-bs-toggle": "tooltip-aval", "data-bs-title": (descricao) }}>
<i class="bi bi-info-circle-fill text-secondary icon-tab fs-6"></i>
</div>
</li>

<li>
<BtnAnexo />
</li>

<li>

</li>
</ul>
</td>

<td>{peso}</td>
<td>{pontos}</td>

<td>
<SelectPontos />
</td>
</tr></Fragment>
))}


<tr class="aval-line-sub">
<td colspan="2" class="text-start">Gestão</td>
<td>16%</td>
<td>16</td>
<td></td>
</tr>
{rowsGestao.map(({ item, descricao, peso, pontos }) => (
<Fragment><tr>
<td class="text-start">
<div class="d-flex align-items-baseline justify-content-between gap-1">
<div>{item}</div>
</div>
</td>

<td>
<ul class="list-add">
<li>
<div {...{ "data-bs-toggle": "tooltip-aval", "data-bs-title": (descricao) }}>
<i class="bi bi-info-circle-fill text-secondary icon-tab fs-6"></i>
</div>
</li>

<li>
<BtnAnexo />
</li>

<li>

</li>
</ul>
</td>

<td>{peso}</td>
<td>{pontos}</td>

<td>
<SelectPontos />
</td>
</tr></Fragment>
))}


<tr class="aval-line-sub">
<td colspan="2" class="text-start">Área Interna / Vestiários</td>
<td>9%</td>
<td>9</td>
<td></td>
</tr>
{rowsArea.map(({ item, descricao, peso, pontos }) => (
<Fragment><tr>
<td class="text-start">
<div class="d-flex align-items-baseline justify-content-between gap-1">
<div>{item}</div>
</div>
</td>

<td>
<ul class="list-add">
<li>
<div {...{ "data-bs-toggle": "tooltip-aval", "data-bs-title": (descricao) }}>
<i class="bi bi-info-circle-fill text-secondary icon-tab fs-6"></i>
</div>
</li>

<li>
<BtnAnexo />
</li>

<li>

</li>
</ul>
</td>

<td>{peso}</td>
<td>{pontos}</td>

<td>
<SelectPontos />
</td>
</tr></Fragment>
))}
</tbody>
</table>
</div>

<script is:inline>
{() => {
window.addEventListener('load', () => {

$('[data-bs-toggle="tooltip-aval"]').tooltip({
html: true,
});

$('[data-bs-toggle="tooltip-aval"]').on('inserted.bs.tooltip', function () {
var thisClass5 = $(this).attr("class");
$('.tooltip-inner').addClass('tooltip-aval');
});
});
}}
</script>

</Fragment>;
