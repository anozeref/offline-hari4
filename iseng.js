    function faktorial(n) {
      if (n === 0) return 1;
      return n * faktorial(n - 1);
    }

    function hitung() {
      const raw = document.getElementById('angka').value;
      const n = parseInt(raw);

      if (isNaN(n) || n < 0) {
        document.getElementById('hasil').innerText = 'Masukkan angka bulat >= 0';
        return;
      }

      const hasil = faktorial(n);
      document.getElementById('hasil').innerText = 'Faktorial ' + n + ' adalah ' + hasil;
    }