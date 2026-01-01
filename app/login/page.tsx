import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Lock, Mail, Globe, LayoutGrid, Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col p-6 pt-8">
      
      {/* Navegação de Voltar */}
      <nav className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-[#012e25] transition-colors">
            <ChevronLeft size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Voltar ao Jardim</span>
        </Link>
      </nav>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-2xl font-black text-[#012e25] tracking-tight">
          Acesse sua <span className="text-emerald-500">Area VIP</span>
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Gerencie seus agentes autônomos e visualize o status do seu jardim.
        </p>
      </div>

      {/* Card de Login */}
      <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
        
        {/* Opções de Login Social */}
        <div className="flex flex-col gap-3 mb-6">
            <button className="flex items-center justify-center gap-3 w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-50 hover:border-emerald-200 transition-all group shadow-sm">
                <Chrome size={16} className="text-red-500 group-hover:scale-110 transition-transform"/>
                Entrar com Google
            </button>
            
            <button className="flex items-center justify-center gap-3 w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-50 hover:border-blue-200 transition-all group shadow-sm">
                <LayoutGrid size={16} className="text-blue-500 group-hover:scale-110 transition-transform"/>
                Entrar com Microsoft
            </button>

            <button className="flex items-center justify-center gap-3 w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-50 hover:border-green-800 transition-all group shadow-sm">
                <Globe size={16} className="text-[#002D72] group-hover:scale-110 transition-transform"/>
                Entrar com Gov.br
            </button>
        </div>

        <div className="flex items-center gap-3 mb-6 opacity-50">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-[10px] uppercase font-black text-gray-400">Ou use seu e-mail</span>
            <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Formulário Manual */}
        <form className="flex flex-col gap-4">
            <div className="space-y-1">
                <label className="text-[9px] font-black text-[#012e25] uppercase tracking-widest pl-1">E-mail</label>
                <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="email" 
                        placeholder="seu@email.com"
                        className="w-full bg-[#f2f4f6] border border-transparent focus:border-emerald-500 focus:bg-white text-sm py-3.5 pl-11 pr-4 rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium text-[#012e25]"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-[9px] font-black text-[#012e25] uppercase tracking-widest pl-1">Senha</label>
                <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-[#f2f4f6] border border-transparent focus:border-emerald-500 focus:bg-white text-sm py-3.5 pl-11 pr-4 rounded-xl outline-none transition-all placeholder:text-gray-400 font-medium text-[#012e25]"
                    />
                </div>
            </div>

            <div className="flex justify-end mb-2">
                <a href="#" className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700">Esqueceu a senha?</a>
            </div>

            <button className="w-full bg-[#012e25] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-emerald-900/20 active:scale-95 transition-transform hover:bg-emerald-900 flex items-center justify-center gap-2">
                Acessar Sistema <Lock size={14} />
            </button>
        </form>

      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-400 font-medium">
            Não tem uma conta? <a href="#" className="text-emerald-600 font-bold hover:underline">Solicitar acesso</a>
        </p>
      </div>

    </div>
  );
}
