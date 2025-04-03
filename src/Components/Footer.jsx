import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Reduza, Digitalize, Preserve!</h2>
          
          {/* Seção de Contatos */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">CONTATO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <span>📱</span> (37) 9 9912-4992
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>✉️</span> pedropcunha1916@gmail.com
                </p>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://instagram.com/pparreirac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-green-300 transition-colors"
                >
                  <span>📸</span> @pparreirac
                </a>
                <a 
                  href="https://github.com/PeddroPC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-green-300 transition-colors"
                >
                  <span>💻</span> github.com/PeddroPC
                </a>
              </div>
            </div>
          </div>

          {/* Créditos */}
          <p className="text-xs opacity-80 border-t border-green-700 pt-4">
            © {new Date().getFullYear()} Do Papel para o Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;