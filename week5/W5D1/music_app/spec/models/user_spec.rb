require 'rails_helper'

RSpec.describe User, type: :model do
  describe User do
  subject(:user) do
    FactoryGirl.build(:user,
      email: "jd@testmail.com",
      password: "password")
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it "creates the password_digest, once a password more than 6 characters is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a new session once validated" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "#reset_session_token!" do
    it "gives a user a new session token" do
      user.valid?
      previous_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(previous_session_token)
    end

    it "will return the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe "#is_password?" do
    it "makes sure user has correct password" do
      expect(user.is_password?("correct_password")).to be true
    end

    it "expects a wrong password to be false" do
      expect(user.is_password?("password")).to be false
    end
  end

  describe ".find_by_credentials" do
    before { user.save! }

    it "returns user given good credentials" do
      expect(User.find_by_credentials("jd@testmail.com", "correct_password")).to eq(user)
    end

    it "returns nil given bad credentials" do
      expect(User.find_by_credentials("jd@testmail.com", "bad_password")).to eq(nil)
    end
  end
end
