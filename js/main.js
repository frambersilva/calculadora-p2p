function calculateP2P() {
            const usdt = parseFloat(document.getElementById('usdt').value);
            const sellRate = parseFloat(document.getElementById('sellRate').value);
            const buyRate = parseFloat(document.getElementById('buyRate').value);
            
            if (isNaN(usdt) || isNaN(sellRate) || isNaN(buyRate)) {
                alert("Por favor, complete todos los campos con números válidos.");
                return;
            }

            // Calcular Bs recibido por venta
            const vesReceive = usdt * sellRate;
            document.getElementById('vesReceive').value = vesReceive.toFixed(2);

            // Calcular comisión (0.5% de USDT inicial)
            const commission = usdt * 0.005;
            document.getElementById('commission').value = commission.toFixed(2);

            // Calcular USDT Final (después de comisión)
            const finalUsdt = vesReceive / buyRate;
            document.getElementById('finalUsdt').value = finalUsdt.toFixed(2);

            // Calcular ganancia final (USDT final - USDT inicial - Comisión)
            const profit = finalUsdt - usdt - commission;
            document.getElementById('profit').value = profit.toFixed(2);
}
