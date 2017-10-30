require 'rails_helper'

RSpec.describe Auth, type: :model do
  feature "Signing up!" do

  scenario "New user page" do
    visit new_user_url
    expect(page).to have_content "New User"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => "test@email.com"
      fill_in 'Password', :with => "catandmouse"
      click_on "Create User"
    end

    scenario "Once signed up, it redirects to the sign in page" do
      expect(page).to have_content "Successfully signed up! Check your email for an activation confirmation."
    end
  end

  feature "for invalid user" do
    before(:each) do
      visit new_user_url
      fill_in 'Email', :with => "testing@email.com"
      click_on "create user"
    end

    scenario "re-renders the new user page after failed signup" do
      expect(page).to have_content "Password needs to be longer than 6 characters"
    end
  end
end
