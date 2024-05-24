<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureCourseEnrolled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $courseId = $request->route('id'); // Assumes course ID is a route parameter
        $user = Auth::user();

        // Check if the user is enrolled in the course
        if (!$user->courses->contains($courseId)) {
            return response()->json(['message' => 'You are not enrolled in this course.'], 403);
        }

        return $next($request);
    }
}
