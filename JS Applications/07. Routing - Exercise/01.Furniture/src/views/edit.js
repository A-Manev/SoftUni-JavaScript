import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, editRecord } from '../api/data.js';

const editTemplate = (item, onSubmit, errorMsg, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, indalidImg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${errorMsg ? html`<div class="form-group">
                <p>${errorMsg}</p>
            </div>` : ''}
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${'form-control' + (invalidMake ? ' is-invalid' : ' is-valid' )} id="new-make" type="text"
                    name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${'form-control' + (invalidModel ? ' is-invalid' : ' is-valid' )} id="new-model"
                    type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${'form-control' + (Number(invalidYear) < 1950 || Number(invalidYear)> 2050 ? ' is-invalid'
                : ' is-valid')} id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${'form-control' + (invalidDescription ? ' is-invalid' : ' is-valid' )}
                    id="new-description" type="text" name="description" .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${'form-control' + (Number(invalidPrice)>= 0 ? ' is-invalid' : ' is-valid')} id="new-price"
                type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${'form-control' + (indalidImg ? ' is-invalid' : ' is-valid' )} id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

export async function editPage(ctx) {
    const item = await getItemById(ctx.params.id);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

        data.year = Number(data.year);
        data.price = Number(data.price);

        if (data.make.length < 3) {
            ctx.render(editTemplate(item, onSubmit, 'Make must be at least 4 symbols long!', data.make == ''));
        }

        if (data.model.length < 3) {
            ctx.render(editTemplate(item, onSubmit, 'Model must be at least 4 symbols long!', data.make == '', data.model == ''));
        }

        if (Number(data.year) < 1950 || Number(data.year) > 2050) {
            ctx.render(editTemplate(item, onSubmit, 'Year must be between 1950 and 2050!', data.make == '', data.model == '', data.year == ''));
        }

        if (data.description.length < 10) {
            ctx.render(editTemplate(item, onSubmit, 'Description must be more than 10 symbols!', data.make == '', data.model == '', true, data.description == ''));
        }

        if (data.price < 0) {
            ctx.render(editTemplate(item, onSubmit, 'Price must be a positive number!', data.make == '', data.model == '', true, data.description == '', data.price == ''));
        }

        if (data.img == '') {
            ctx.render(editTemplate(item, onSubmit, 'Image URL is required!', data.make == '', data.model == '', true, data.description == '', data.price == true, data.img == ''));
        }

        if (!(Object.entries(data).filter(([k, v]) => k != 'material').some(([k, v]) => v == ''))) {

            if (Number(data.year) >= 1950 && Number(data.year) <= 2050 && data.price >= 0) {
                await editRecord(item._id, data);

                ctx.page.redirect('/');
            }
        }
    }
}