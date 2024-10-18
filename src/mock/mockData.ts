export const mockResponses = {
    '/auth/register': {
      access_token: "mock_register_token_12345",
      token_type: "Bearer",
      expires_in: 3600,
      user: {
        email: "newuser@example.com",
        username: null,
        preferredLanguage: "en",
        destination: null,
        fromCountry: null,
        movingDate: null
      }
    },
    '/auth/login': {
      access_token: "mock_login_token_67890",
      token_type: "Bearer",
      expires_in: 3600,
      user: {
        email: "dev1@dev.com",
        username: null,
        preferredLanguage: "en",
        destination: null,
        fromCountry: null,
        movingDate: null
      }
    },
    '/user/profile': {
      message: "Profile updated successfully",
      user: {
        username: null,
        preferredLanguage: "en",
        movingDate: "2024-10-24T00:00:00.000Z",
        destination: "Tokyo",
        fromCountry: "vi",
        travelWith: "ME_PARTNER_CHILDREN"
      }
    },
    // Add other mock responses here as needed
  };
