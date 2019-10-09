exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 12345678909876543,
          make: 'Honda',
          model: 'accord',
          transmission: 'automatic',
          'title status': 'Clean',
          miles: 40000
        },
        {
          vin: 12345678909876543,
          make: 'Chevy',
          model: 'volt',
          transmission: 'manual',
          'title status': 'Clean',
          miles: 50000
        },
        {
          vin: 12345678909876543,
          make: 'Mercedes',
          model: 'e320',
          transmission: 'manual',
          'title status': 'Clean',
          miles: 25000
        },
        {
          vin: 12345678909876543,
          make: 'Jaguar',
          model: 'x-j s-type',
          transmission: 'manual',
          'title status': 'Clean',
          miles: 1000
        }
      ]);
    });
};
