import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from './ui/sidebar';
import Link from 'next/link';
import { ChevronDown, Home, MoreHorizontal, User, Youtube } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    href: '/',
    icon: <Home />
  },
  {
    id: 2,
    title: 'Conny Gu',
    href: '/conny-gu',
    channel: 'https://www.youtube.com/@connygu/',
    icon: <User />,
    children: [
      {
        id: 1,
        title: 'Bear Store',
        href: '/bear-store'
      }
    ]
  },
  {
    id: 3,
    title: 'FreecodeCamp',
    href: '/free-code-camp',
    icon: <Youtube />
  }
];

const AppSidebar = () => {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Collapsible defaultOpen={false} className='group/collapsible'>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger >
                  Header
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <CollapsibleContent>
                  Header Content goses here
                </CollapsibleContent>
              </SidebarGroupContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Zustand</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                  menuItems.map(menu => (
                    <SidebarMenuItem key={menu.id}>
                      <SidebarMenuButton asChild>
                        <Link href={menu.href}>
                          {menu.icon} {menu.title}                          
                        </Link>                        
                      </SidebarMenuButton>
                      {
                        menu.children && (
                          <SidebarMenuSub>
                            {
                              menu.children.map(sub=> (
                                <SidebarMenuSubItem key={sub.id}>
                                  <SidebarMenuSubButton asChild>
                                    <Link href={sub.href}>{sub.title}</Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))
                            }                            
                          </SidebarMenuSub>
                        )
                      }
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Mini Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/projects/todo'}>Todo List</Link>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <span>Edit Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <h4>footer</h4>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

export default AppSidebar