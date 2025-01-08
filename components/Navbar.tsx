"use client"

import React, { useState } from "react"
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu"
import faq from '@/assets/faq.jpg'
import support from '@/assets/support.jpg'
import guide from '@/assets/guide.jpg'
import community from '@/assets/community.jpg'

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-[1px] rounded-full">
  <Menu setActive={setActive}>
    <MenuItem setActive={setActive} active={active} item="Chats">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/chats">All Chats</HoveredLink>
        <HoveredLink href="/chats/groups">Group Chats</HoveredLink>
        <HoveredLink href="/chats/archived">Archived Chats</HoveredLink>
      </div>
    </MenuItem>

    <MenuItem setActive={setActive} active={active} item="Contacts">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/contacts">My Contacts</HoveredLink>
        <HoveredLink href="/contacts/favorites">Favorite Contacts</HoveredLink>
        <HoveredLink href="/contacts/blocked">Blocked Contacts</HoveredLink>
      </div>
    </MenuItem>

    <MenuItem setActive={setActive} active={active} item="Settings">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/settings/profile">Profile Settings</HoveredLink>
        <HoveredLink href="/settings/privacy">Privacy & Security</HoveredLink>
        <HoveredLink href="/settings/notifications">Notification Preferences</HoveredLink>
      </div>
    </MenuItem>

    <MenuItem setActive={setActive} active={active} item="Help">
      <div className="text-sm grid grid-cols-2 gap-10 p-4">
        <ProductItem
          title="FAQs"
          description="Find answers to common questions"
          href="/help/faqs"
          src={faq}
        />
        <ProductItem
          title="Support"
          description="Get in touch with our support team"
          href="/help/support"
          src={support}
        />
        <ProductItem
          title="Guides"
          description="Learn how to use the chat app"
          href="/help/guides"
          src={guide}
        />
        <ProductItem
          title="Community"
          description="Join discussions with other users"
          href="/help/community"
          src={community}
        />
      </div>
    </MenuItem>

    <MenuItem setActive={setActive} active={active} item="Account">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/account/profile">View Profile</HoveredLink>
        
      </div>
    </MenuItem>
    
  </Menu>
</div>

  )
}

