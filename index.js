/**
 * API Generate.js - Main entry point
 * A powerful JavaScript library for generating RESTful APIs
 */

class ApiGenerator {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || '/api';
    this.version = options.version || '1.0.0';
    this.routes = {
      get: [],
      post: [],
      put: [],
      delete: [],
      patch: []
    };
    this.middlewares = [];
  }

  /**
   * Register a GET endpoint
   * @param {string} path - The endpoint path
   * @param {Function} handler - The request handler
   */
  get(path, handler) {
    this.routes.get.push({ path, handler });
    return this;
  }

  /**
   * Register a POST endpoint
   * @param {string} path - The endpoint path
   * @param {Function} handler - The request handler
   */
  post(path, handler) {
    this.routes.post.push({ path, handler });
    return this;
  }

  /**
   * Register a PUT endpoint
   * @param {string} path - The endpoint path
   * @param {Function} handler - The request handler
   */
  put(path, handler) {
    this.routes.put.push({ path, handler });
    return this;
  }

  /**
   * Register a DELETE endpoint
   * @param {string} path - The endpoint path
   * @param {Function} handler - The request handler
   */
  delete(path, handler) {
    this.routes.delete.push({ path, handler });
    return this;
  }

  /**
   * Register a PATCH endpoint
   * @param {string} path - The endpoint path
   * @param {Function} handler - The request handler
   */
  patch(path, handler) {
    this.routes.patch.push({ path, handler });
    return this;
  }

  /**
   * Add a middleware
   * @param {Function} middleware - Middleware function
   */
  use(middleware) {
    this.middlewares.push(middleware);
    return this;
  }

  /**
   * Get all registered routes
   * @returns {Object} All routes organized by HTTP method
   */
  getRoutes() {
    return this.routes;
  }

  /**
   * Start the API server (placeholder for actual implementation)
   * @param {number} port - Port to listen on
   */
  start(port = 3000) {
    console.log(`API Generator v${this.version} initialized on port ${port}`);
    console.log(`Base URL: ${this.baseUrl}`);
    console.log(`Registered routes: ${this.getRouteCount()}`);
  }

  /**
   * Get total number of registered routes
   * @returns {number} Total route count
   */
  getRouteCount() {
    return Object.values(this.routes).reduce((sum, arr) => sum + arr.length, 0);
  }
}

module.exports = ApiGenerator;
