/**
 * NavTree Stories
 *
 * Storybook stories for the Notion-style navigation tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Home,
  BookOpen,
  FolderOpen,
  FileText,
  Zap,
  Users,
  Settings,
  Rocket,
  Sparkles,
  Users2,
  MessageCircle,
  Target,
  Star,
  Edit2,
  BarChart3,
  MessageSquare,
  Database,
  Plug,
  Megaphone,
} from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { NavTree } from './NavTree';

const meta: Meta<typeof NavTree> = {
  title: 'Sections/App/NavTree',
  component: NavTree,
  parameters: {
    layout: 'fullscreen' as const,
    docs: {
      description: {
        component:
          'A Notion-style hierarchical navigation sidebar with collapsible sections, folders, pages, and context menu actions. Features include localStorage persistence of expanded/collapsed states and hover actions for adding and managing tree nodes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * Default story with realistic data structure
 */
export const Default: StoryObj<typeof NavTree> = {
  render: () => {
    const sections = [
      {
        id: 'essentials',
        title: 'Lo esencial',
        defaultExpanded: true,
        nodes: [
          {
            id: 'dashboard',
            type: 'page' as const,
            label: 'Dashboard',
            icon: <Home size={16} />,
            href: '/dashboard',
          },
          {
            id: 'quick-start',
            type: 'page' as const,
            label: 'Inicio rápido',
            icon: <Zap size={16} />,
            href: '/quick-start',
          },
          {
            id: 'settings',
            type: 'page' as const,
            label: 'Configuración',
            icon: <Settings size={16} />,
            href: '/settings',
          },
        ],
      },
      {
        id: 'my-pages',
        title: 'Mis páginas',
        defaultExpanded: true,
        nodes: [
          {
            id: 'projects',
            type: 'folder' as const,
            label: 'Proyectos',
            icon: <FolderOpen size={16} />,
            children: [
              {
                id: 'web-redesign',
                type: 'page' as const,
                label: 'Rediseño web',
                icon: <FileText size={16} />,
                href: '/projects/web-redesign',
              },
              {
                id: 'mobile-app',
                type: 'page' as const,
                label: 'Aplicación móvil',
                icon: <FileText size={16} />,
                href: '/projects/mobile-app',
              },
              {
                id: 'design-system',
                type: 'folder' as const,
                label: 'Sistema de diseño',
                icon: <FolderOpen size={16} />,
                children: [
                  {
                    id: 'components',
                    type: 'page' as const,
                    label: 'Componentes',
                    icon: <FileText size={16} />,
                    href: '/design-system/components',
                  },
                  {
                    id: 'tokens',
                    type: 'page' as const,
                    label: 'Tokens',
                    icon: <FileText size={16} />,
                    href: '/design-system/tokens',
                  },
                  {
                    id: 'guidelines',
                    type: 'page' as const,
                    label: 'Guías',
                    icon: <FileText size={16} />,
                    href: '/design-system/guidelines',
                  },
                ],
              },
            ],
          },
          {
            id: 'documentation',
            type: 'folder' as const,
            label: 'Documentación',
            icon: <BookOpen size={16} />,
            children: [
              {
                id: 'getting-started',
                type: 'page' as const,
                label: 'Empezando',
                icon: <FileText size={16} />,
                href: '/docs/getting-started',
              },
              {
                id: 'api-reference',
                type: 'page' as const,
                label: 'Referencia API',
                icon: <FileText size={16} />,
                href: '/docs/api-reference',
              },
              {
                id: 'examples',
                type: 'page' as const,
                label: 'Ejemplos',
                icon: <FileText size={16} />,
                href: '/docs/examples',
              },
            ],
          },
        ],
      },
      {
        id: 'shared',
        title: 'Compartido',
        defaultExpanded: true,
        nodes: [
          {
            id: 'team-workspace',
            type: 'folder' as const,
            label: 'Espacio del equipo',
            icon: <Users size={16} />,
            children: [
              {
                id: 'team-goals',
                type: 'page' as const,
                label: 'Objetivos',
                icon: <FileText size={16} />,
                href: '/team/goals',
              },
              {
                id: 'team-updates',
                type: 'page' as const,
                label: 'Actualizaciones',
                icon: <FileText size={16} />,
                href: '/team/updates',
              },
            ],
          },
          {
            id: 'roadmap',
            type: 'page' as const,
            label: 'Mapa de ruta',
            icon: <Rocket size={16} />,
            href: '/roadmap',
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5' }}>
        <NavTree
          sections={sections}
          persistKey="orion-nav-tree-demo"
          activeNodeId="components"
          onNodeClick={(node) => {
            action('onNodeClick')(node);
          }}
          actions={{
            onAdd: (parentId, sectionId) => {
              action('onAdd')({ parentId, sectionId });
            },
            onRename: (nodeId) => {
              action('onRename')({ nodeId });
            },
            onDuplicate: (nodeId) => {
              action('onDuplicate')({ nodeId });
            },
            onMove: (nodeId) => {
              action('onMove')({ nodeId });
            },
            onDelete: (nodeId) => {
              action('onDelete')({ nodeId });
            },
          }}
        />
        <div style={{ flex: 1, padding: '40px', background: 'white' }}>
          <h1>NavTree Demo</h1>
          <p>
            Haz clic en los elementos de la barra lateral para navegar. Pasa el
            ratón sobre los elementos para ver las acciones de agregar (+) y menú
            (…).
          </p>
          <p>
            Las secciones y el estado de expansión de los elementos se guardan en
            localStorage, así que persisten después de recargar.
          </p>
          <ul style={{ marginTop: '20px', color: '#666' }}>
            <li>✓ Secciones colapsables</li>
            <li>✓ Carpetas anidadas con desplazamiento automático</li>
            <li>✓ Acciones por fila: agregar (+) y menú (...)</li>
            <li>✓ Estado activo (página actual)</li>
            <li>✓ Persistencia en localStorage</li>
            <li>✓ Tokens de Orion (tema claro/oscuro)</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * Compact variant with fewer items
 */
export const Compact: StoryObj<typeof NavTree> = {
  render: () => {
    const sections = [
      {
        id: 'main',
        title: 'Navegación',
        defaultExpanded: true,
        nodes: [
          {
            id: 'home',
            type: 'page' as const,
            label: 'Inicio',
            icon: <Home size={16} />,
          },
          {
            id: 'docs',
            type: 'folder' as const,
            label: 'Documentación',
            icon: <BookOpen size={16} />,
            children: [
              {
                id: 'intro',
                type: 'page' as const,
                label: 'Introducción',
                icon: <FileText size={16} />,
              },
            ],
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', height: '600px', border: '1px solid #e0e0e0' }}>
        <NavTree
          width={240}
          sections={sections}
          persistKey="orion-nav-tree-compact"
          activeNodeId="home"
          onNodeClick={action('onNodeClick')}
          actions={{
            onDelete: action('onDelete'),
          }}
        />
        <div style={{ flex: 1, padding: '20px', background: '#fafafa' }}>
          <h2>Compact view</h2>
          <p>Versión simplificada con pocas secciones.</p>
        </div>
      </div>
    );
  },
};

/**
 * With header and footer
 */
export const WithHeaderAndFooter: StoryObj<typeof NavTree> = {
  render: () => {
    const sections = [
      {
        id: 'main',
        title: 'Principal',
        defaultExpanded: true,
        nodes: [
          {
            id: 'page1',
            type: 'page' as const,
            label: 'Página 1',
            icon: <FileText size={16} />,
          },
          {
            id: 'page2',
            type: 'page' as const,
            label: 'Página 2',
            icon: <FileText size={16} />,
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', height: '600px', border: '1px solid #e0e0e0' }}>
        <NavTree
          width={260}
          sections={sections}
          persistKey="orion-nav-tree-with-slots"
          header={
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              📚 Mi Workspace
            </div>
          }
          footer={
            <div
              style={{
                textAlign: 'center',
                fontSize: '12px',
                color: '#666',
              }}
            >
              👤 Usuario
            </div>
          }
          activeNodeId="page1"
          onNodeClick={action('onNodeClick')}
        />
        <div style={{ flex: 1, padding: '20px', background: '#fafafa' }}>
          <h2>Con encabezado y pie</h2>
          <p>
            El NavTree puede incluir un encabezado (ej. logo) y pie (ej. menú de
            usuario).
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Headless variant without section headers
 */
export const Headless: StoryObj<typeof NavTree> = {
  render: () => {
    const sections = [
      {
        id: 'navigation',
        title: 'Navigation',
        defaultExpanded: true,
        nodes: [
          {
            id: 'home',
            type: 'page' as const,
            label: 'Inicio',
            icon: <Home size={16} />,
            href: '/home',
          },
          {
            id: 'docs',
            type: 'folder' as const,
            label: 'Documentación',
            icon: <BookOpen size={16} />,
            children: [
              {
                id: 'intro',
                type: 'page' as const,
                label: 'Introducción',
                icon: <FileText size={16} />,
                href: '/docs/intro',
              },
              {
                id: 'guide',
                type: 'page' as const,
                label: 'Guía',
                icon: <FileText size={16} />,
                href: '/docs/guide',
              },
            ],
          },
        ],
      },
      {
        id: 'tools',
        title: 'Tools',
        defaultExpanded: true,
        nodes: [
          {
            id: 'settings',
            type: 'page' as const,
            label: 'Configuración',
            icon: <Settings size={16} />,
            href: '/settings',
          },
          {
            id: 'team',
            type: 'folder' as const,
            label: 'Equipo',
            icon: <Users size={16} />,
            children: [
              {
                id: 'members',
                type: 'page' as const,
                label: 'Miembros',
                icon: <FileText size={16} />,
                href: '/team/members',
              },
              {
                id: 'roles',
                type: 'page' as const,
                label: 'Roles',
                icon: <FileText size={16} />,
                href: '/team/roles',
              },
            ],
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', height: '600px', border: '1px solid #e0e0e0' }}>
        <NavTree
          width={240}
          sections={sections}
          persistKey="orion-nav-tree-headless"
          activeNodeId="home"
          headless={true}
          onNodeClick={(node) => {
            action('onNodeClick')(node);
          }}
          actions={{
            onDelete: (nodeId) => {
              action('onDelete')({ nodeId });
            },
          }}
        />
        <div style={{ flex: 1, padding: '20px', background: '#fafafa' }}>
          <h2>Headless Variant</h2>
          <p>
            Variante sin encabezados de sección. Los nodos se renderizan
            directamente, manteniendo toda la funcionalidad de jerarquía,
            acciones hover, y persistencia en localStorage.
          </p>
          <ul style={{ marginTop: '20px', color: '#666' }}>
            <li>✓ Sin encabezados de sección colapsables</li>
            <li>✓ Nodos raíz renderizados directamente</li>
            <li>✓ Carpetas anidadas funcionan normalmente</li>
            <li>✓ Acciones por fila: agregar (+) y menú (...)</li>
            <li>✓ Persistencia en localStorage</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * With agents (ChatBuilder/AgentWorkspace style)
 * Demonstrates Avatar icons, nested agent structure, and ChatBuilder sections
 */
export const WithAgents: StoryObj<typeof NavTree> = {
  render: () => {
    const agentSubPages = (agentId: string) => [
      { id: `${agentId}-edit`, type: 'page' as const, label: 'Editar', icon: <Edit2 size={14} /> },
      { id: `${agentId}-metrics`, type: 'page' as const, label: 'Métricas', icon: <BarChart3 size={14} /> },
      { id: `${agentId}-conversations`, type: 'page' as const, label: 'Conversaciones', icon: <MessageSquare size={14} /> },
      { id: `${agentId}-datasources`, type: 'page' as const, label: 'Fuentes de datos', icon: <Database size={14} /> },
      { id: `${agentId}-integrations`, type: 'page' as const, label: 'Integraciones', icon: <Plug size={14} /> },
      { id: `${agentId}-campaigns`, type: 'page' as const, label: 'Campañas', icon: <Megaphone size={14} /> },
      { id: `${agentId}-settings`, type: 'page' as const, label: 'Configuración', icon: <Settings size={14} /> },
    ];

    const sections = [
      {
        id: 'agents',
        title: 'Agentes IA',
        icon: <Sparkles size={16} />,
        badge: 5,
        defaultExpanded: true,
        nodes: [
          {
            id: 'folder-postgrado',
            type: 'folder' as const,
            label: 'Agentes postgrado',
            icon: <FolderOpen size={16} />,
            children: [
              {
                id: 'agent-uvm',
                type: 'folder' as const,
                label: 'UVM Agent',
                icon: <Avatar size="xs" initials="UV" />,
                children: agentSubPages('agent-uvm'),
              },
              {
                id: 'agent-premium',
                type: 'folder' as const,
                label: 'Premium Support',
                icon: <Avatar size="xs" icon={<Star size={12} />} />,
                children: agentSubPages('agent-premium'),
              },
            ],
          },
          {
            id: 'agent-gp-bot',
            type: 'folder' as const,
            label: 'General Purpose Bot',
            icon: <Avatar size="xs" initials="GP" />,
            children: agentSubPages('agent-gp-bot'),
          },
        ],
      },
      {
        id: 'help-centers',
        title: 'Centro de Ayuda',
        icon: <BookOpen size={16} />,
        badge: 2,
        defaultExpanded: true,
        nodes: [
          {
            id: 'help-uvm',
            type: 'page' as const,
            label: 'Universidad Virtual',
            icon: <BookOpen size={14} />,
          },
          {
            id: 'help-campus',
            type: 'page' as const,
            label: 'Campus Online',
            icon: <BookOpen size={14} />,
          },
        ],
      },
      {
        id: 'community',
        title: 'Comunidad',
        icon: <Users2 size={16} />,
        badge: 3,
        defaultExpanded: true,
        nodes: [
          {
            id: 'community-contacts',
            type: 'page' as const,
            label: 'Contactos',
            icon: <Users2 size={14} />,
          },
          {
            id: 'community-conversations',
            type: 'page' as const,
            label: 'Conversaciones',
            icon: <MessageCircle size={14} />,
          },
          {
            id: 'community-segments',
            type: 'page' as const,
            label: 'Segmentos',
            icon: <Target size={14} />,
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5' }}>
        <NavTree
          width={260}
          sections={sections}
          persistKey="orion-nav-tree-agents"
          activeNodeId="agent-uvm"
          onNodeClick={(node) => {
            action('onNodeClick')(node);
          }}
          actions={{
            onAdd: (parentId, sectionId) => {
              action('onAdd')({ parentId, sectionId });
            },
            onDelete: (nodeId) => {
              action('onDelete')({ nodeId });
            },
          }}
        />
        <div style={{ flex: 1, padding: '40px', background: 'white' }}>
          <h1>Agentes IA</h1>
          <p>
            Este es el patrón de AgentWorkspace: sidebar con secciones de agentes,
            centros de ayuda y comunidad. Cada agente tiene 7 sub-páginas y usa Avatar con iconos o iniciales.
          </p>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
            ✓ Tres secciones colapsables con iconos<br/>
            ✓ Agentes anidados en carpetas con Avatar<br/>
            ✓ Sub-páginas para cada agente<br/>
            ✓ Icon-to-chevron swap en hover<br/>
            ✓ Badges de contador en secciones
          </p>
        </div>
      </div>
    );
  },
};
