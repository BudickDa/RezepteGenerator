Zutaten = new Mongo.Collection('Zutaten');

Zutat = Astro.Class({
    name: 'Zutat',
    collection: Zutaten,
    fields: {
        name: 'string',
        menge: 'string'
    }
});


Rezepte = new Mongo.Collection('Rezepte');
Rezept = Astro.Class({
    name: 'Rezept',
    collection: Rezepte,
    fields: {
        name: 'string',
        beschreibung: 'string',

    },
    relations: {
        zutaten: {
            type: 'many',
            class: 'Zutat',
            local: '_id',
            foreign: 'zutatId'
        }
    },
    methods: {
        rezeptAusText: function(name, text){
            var zutaten = [], re = /[^[\]]+(?=])/;
            this.name = name;
            this.beschreibung = text;

            zutaten = re.exec(text);

            _.each(zutaten, function(zutat){
                var arr = zutat.slit(' '), zutat = new Zutat();
                zutat.menge = arr[0];
                zutat.name = arr[1];
                this.zutaten.push();
            });

        }
    }
});