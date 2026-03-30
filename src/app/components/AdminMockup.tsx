import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Package, DollarSign, Users } from 'lucide-react';
import { Button } from './ui/button';

export const AdminMockup: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e6f7ef] text-[#008060] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#008060]/10">
            Gestao
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">Painel Administrativo</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Gerencie seu negocio com ferramentas profissionais e relatorios em tempo real
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#004c3f] to-[#002e25] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Mock Admin Panel */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-[#95BF47]" />
              </div>
              <div className="text-white text-xl font-bold">Dashboard Administrativo</div>
            </div>

            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    icon: DollarSign,
                    label: 'Receita Hoje',
                    value: 'R$ 12.450,00',
                    change: '+23%',
                    color: 'bg-[#008060]',
                  },
                  {
                    icon: Package,
                    label: 'Pedidos',
                    value: '156',
                    change: '+12%',
                    color: 'bg-[#95BF47]',
                  },
                  {
                    icon: Users,
                    label: 'Clientes',
                    value: '1.234',
                    change: '+8%',
                    color: 'bg-[#25D366]',
                  },
                  {
                    icon: TrendingUp,
                    label: 'Conversao',
                    value: '3.2%',
                    change: '+5%',
                    color: 'bg-[#008060]',
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        <stat.icon className="size-4 text-white" />
                      </div>
                      <span className="text-[#95BF47] text-xs font-semibold">{stat.change}</span>
                    </div>
                    <div className="text-2xl text-white font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white font-bold">Pedidos Recentes</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left p-3 text-gray-400 text-sm">ID</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Cliente</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Produto</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Valor</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#1234', customer: 'Joao Silva', product: 'Smartphone Max', value: 'R$ 3.299,90', status: 'Pago' },
                        { id: '#1235', customer: 'Maria Santos', product: 'Fone Premium', value: 'R$ 899,90', status: 'Pago' },
                        { id: '#1236', customer: 'Pedro Costa', product: 'Notebook Ultra', value: 'R$ 4.599,90', status: 'Processando' },
                      ].map((order, index) => (
                        <tr key={index} className="border-t border-white/5">
                          <td className="p-3 text-gray-300 text-sm">{order.id}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.customer}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.product}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.value}</td>
                          <td className="p-3">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'Pago'
                                ? 'bg-[#008060]/20 text-[#95BF47]'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-[#008060] text-[#008060] hover:bg-[#e6f7ef]">
              Acessar Painel Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
