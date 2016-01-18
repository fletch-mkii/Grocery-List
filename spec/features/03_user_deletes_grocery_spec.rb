require "spec_helper"

feature "user add grocery item", js: true do
  scenario "successfully delete newly added grocery item" do
    visit "/groceries"
    fill_in "Name", with: "Peanut Butter"

    expect_no_page_reload do
      click_button "Delete"
      expect(page).to_not have_content "Peanut Butter"
    end
  end
end
